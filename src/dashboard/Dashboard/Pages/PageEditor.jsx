import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Eye, Globe, Image as ImageIcon } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-sm outline-none focus:border-[hsl(24,98%,53%)] focus:shadow-[0_0_0_3px_hsl(24,98%,53%,0.1)] transition-all font-[inherit]';

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
      {label}
    </label>
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-7 flex flex-col gap-6 shadow-sm">
    <h2 className="font-display text-lg font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-4">
      {title}
    </h2>
    {children}
  </div>
);

// Dynamic editors for nested CMS content
const DynamicField = ({ path, value, onChange }) => {
  if (Array.isArray(value)) {
    return <ArrayEditor path={path} value={value} onChange={onChange} />;
  } else if (typeof value === 'object' && value !== null) {
    return (
      <div className="flex flex-col gap-4 border-l-2 border-[hsl(var(--border))] pl-4 my-2">
        {Object.entries(value).map(([k, v]) => (
          <DynamicField key={k} path={[...path, k]} value={v} onChange={onChange} />
        ))}
      </div>
    );
  } else if (typeof value === 'string' || typeof value === 'number') {
    const keyName = path[path.length - 1].toLowerCase();
    const isImage = keyName.includes('image') || keyName.includes('img') || keyName.includes('url') || (typeof value === 'string' && value.startsWith('/'));
    const isLongText = keyName.includes('body') || keyName.includes('text') || (typeof value === 'string' && value.length > 60);
    const label = path[path.length - 1];

    return (
      <Field label={label}>
        {isImage ? (
          <div className="flex gap-4 items-center">
             <div className="w-16 h-16 shrink-0 rounded-md bg-[hsl(var(--muted))] border border-[hsl(var(--border))] flex items-center justify-center overflow-hidden">
                {value ? <img src={value} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={20} className="text-[hsl(var(--muted-foreground))]" />}
             </div>
             <input type="text" value={value} onChange={(e) => onChange(path, e.target.value)} className={inputClass} placeholder="Image URL e.g. /photo.jpg" />
          </div>
        ) : isLongText ? (
          <textarea rows={4} value={value} onChange={(e) => onChange(path, e.target.value)} className={`${inputClass} resize-y`} />
        ) : (
          <input type="text" value={value} onChange={(e) => onChange(path, e.target.value)} className={inputClass} />
        )}
      </Field>
    );
  }
  return null;
};

const ArrayEditor = ({ path, value, onChange }) => {
  const handleItemChange = (index, keyPath, newValue) => {
    const newArray = [...value];
    newArray[index] = { ...newArray[index], [keyPath[0]]: newValue };
    onChange(path, newArray);
  };

  const handleRemove = (index) => {
    const newArray = value.filter((_, i) => i !== index);
    onChange(path, newArray);
  };

  const handleAdd = () => {
    const template = value.length > 0 
      ? Object.keys(value[0]).reduce((acc, k) => ({ ...acc, [k]: k === 'id' ? Date.now().toString() : '' }), {}) 
      : { id: Date.now().toString() };
    onChange(path, [...value, template]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xs text-[hsl(var(--muted-foreground))] uppercase font-semibold tracking-wider">Items List</div>
      {value.map((item, index) => (
        <div key={item.id || index} className="p-5 border border-[hsl(var(--border))] rounded-lg flex flex-col gap-4 bg-[hsl(var(--muted)/0.1)] relative group">
          <button onClick={() => handleRemove(index)} className="absolute top-3 right-4 text-red-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
          {Object.entries(item).filter(([k]) => k !== 'id').map(([k, v]) => (
            <DynamicField key={k} path={[k]} value={v} onChange={(childPath, val) => handleItemChange(index, childPath, val)} />
          ))}
        </div>
      ))}
      <button onClick={handleAdd} className="text-sm font-semibold text-[hsl(24,98%,53%)] self-start hover:underline">+ Add New Card</button>
    </div>
  );
};

const PageEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pages, updatePage } = useContent();
  const page = pages.find((p) => p.id === id);

  const [form, setForm] = useState(page ? { ...page } : null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (page) {
      setForm({ ...page });
    }
  }, [page]);

  if (!page || !form) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-[hsl(var(--muted-foreground))]">
        <p className="text-lg">Page not found.</p>
        <button onClick={() => navigate('/dashboard/pages')} className="text-[hsl(24,98%,53%)] font-semibold hover:underline">
          ← Back to Pages
        </button>
      </div>
    );
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSectionChange = (pathArray, newValue) => {
    setForm(prev => {
      const newForm = { ...prev, sections: { ...prev.sections } };
      let current = newForm.sections;
      // Navigate to the parent object
      for (let i = 0; i < pathArray.length - 1; i++) {
        current[pathArray[i]] = Array.isArray(current[pathArray[i]]) ? [...current[pathArray[i]]] : { ...current[pathArray[i]] };
        current = current[pathArray[i]];
      }
      // Set the value
      current[pathArray[pathArray.length - 1]] = newValue;
      return newForm;
    });
    setSaved(false);
  };

  const handleSave = () => {
    const updatedForm = { ...form, lastModified: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) };
    setForm(updatedForm);
    updatePage(updatedForm);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease-out]">

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <button
            onClick={() => navigate('/dashboard/pages')}
            className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors font-medium w-fit"
          >
            <ArrowLeft size={18} /> Back to Pages
          </button>
          <div className="hidden sm:block w-px h-5 bg-[hsl(var(--border))]" />
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-display text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))]">
              Editing: {form.name}
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                form.status === 'Published'
                  ? 'bg-green-600/10 text-green-600'
                  : 'bg-amber-500/10 text-amber-500'
              }`}
            >
              {form.status}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://www.danakigalihotel.com${form.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[hsl(var(--border))] text-sm font-semibold text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.4)] transition-all no-underline"
          >
            <Globe size={16} /> View Live
          </a>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] text-white text-sm font-semibold shadow-[0_4px_15px_-3px_hsl(24,98%,53%,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-3px_hsl(24,98%,53%,0.5)] transition-all whitespace-nowrap"
          >
            <Save size={16} />
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6 sm:gap-8 items-start">

        {/* LEFT — main content generated dynamically from form.sections */}
        <div className="flex flex-col gap-6">
          {Object.entries(form.sections || {}).map(([sectionKey, sectionValue]) => (
            <Section key={sectionKey} title={sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}>
              <DynamicField path={[sectionKey]} value={sectionValue} onChange={handleSectionChange} />
            </Section>
          ))}
        </div>

        {/* RIGHT — settings sidebar */}
        <div className="flex flex-col gap-6 sticky top-6">
          <Section title="Page Settings">
            <Field label="Status">
              <select
                value={form.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className={inputClass}
              >
                <option>Published</option>
                <option>Draft</option>
              </select>
            </Field>
            <Field label="URL Slug">
              <input
                type="text"
                value={form.slug}
                onChange={(e) => handleChange('slug', e.target.value)}
                className={`${inputClass} font-mono`}
              />
            </Field>
            <Field label="Last Modified">
              <p className="text-sm text-[hsl(var(--muted-foreground))] px-1">{form.lastModified}</p>
            </Field>
          </Section>

          <Section title="SEO & Meta">
            <Field label="Meta Title">
              <input
                type="text"
                value={form.metaTitle}
                onChange={(e) => handleChange('metaTitle', e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Meta Description">
              <textarea
                rows={3}
                value={form.metaDescription}
                onChange={(e) => handleChange('metaDescription', e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </Field>
          </Section>

          {/* Live Preview Card */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-5 shadow-sm flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">Search Preview</h3>
            <div className="bg-[hsl(var(--background))] rounded-lg p-4 border border-[hsl(var(--border))]">
              <p className="text-[hsl(24,98%,53%)] text-sm font-medium truncate">
                danakigalihotel.com{form.slug}
              </p>
              <p className="text-[hsl(var(--foreground))] font-semibold text-base mt-1 leading-snug">
                {form.metaTitle}
              </p>
              <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1 leading-relaxed line-clamp-2">
                {form.metaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEditor;
