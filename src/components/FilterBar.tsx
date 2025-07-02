
import React from 'react';
import { SpotTheme } from '@/types';

interface FilterBarProps {
  selectedThemes: SpotTheme[];
  onThemeChange: (themes: SpotTheme[]) => void;
}

const themeLabels: Record<SpotTheme, string> = {
  couple: '💕 커플',
  solo: '🧘 혼자',
  friends: '👥 친구들',
  content: '📹 콘텐츠',
  vintage: '🎞️ 빈티지',
  minimal: '⚪ 미니멀',
  nature: '🌿 자연',
  urban: '🏙️ 도심',
  pet: '🐕 반려동물',
  sunset: '🌅 노을',
  night: '🌙 야경'
};

const FilterBar = ({ selectedThemes, onThemeChange }: FilterBarProps) => {
  const toggleTheme = (theme: SpotTheme) => {
    if (selectedThemes.includes(theme)) {
      onThemeChange(selectedThemes.filter(t => t !== theme));
    } else {
      onThemeChange([...selectedThemes, theme]);
    }
  };

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 glass-effect border-b border-pastel-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-medium text-slate-600 whitespace-nowrap mr-1">테마:</span>
          {(Object.keys(themeLabels) as SpotTheme[]).map((theme) => (
            <button
              key={theme}
              onClick={() => toggleTheme(theme)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedThemes.includes(theme)
                  ? 'bg-pastel-500 text-slate-700 shadow-md'
                  : 'bg-white/70 text-slate-600 hover:bg-white border border-pastel-300'
              }`}
            >
              {themeLabels[theme]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
