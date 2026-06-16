import React from 'react';
import * as LucideIcons from 'lucide-react';

const DynamicIcon = ({ name, ...props }) => {
  const Icon = LucideIcons[name];
  if (!Icon) {
    return <LucideIcons.HelpCircle {...props} />;
  }
  return <Icon {...props} />;
};

export default DynamicIcon;
