import { useState } from 'react'

import { themesList } from '../plugin/multi-theme-plugin'

export default function Homepage() {
  const [activeTheme, setActiveTheme] = useState('default')
  const themesList = ['default', 'swiss', 'forest', 'aqua']

  return (
    <div data-theme={activeTheme}>
      <div className="mx-auto mt-20 max-w-4xl px-8">
        <h1 className="text-2xl font-medium">Multi-theme plugin demo</h1>

        <div className="mt-8 flex gap-4">
          {themesList.map((theme) => (
            <button
              key={theme}
              data-theme={theme}
              className="bg-multi-base hover:bg-multi-base/75 text-multi-base rounded px-5 py-2 font-medium shadow"
              onClick={() => setActiveTheme(theme)}
            >
              {theme}
            </button>
          ))}
        </div>

        <p className="mt-4 text-gray-500">
          Current theme: <span className="text-multi-base font-medium">{activeTheme}</span>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-multi-base rounded-xl p-8 shadow-xl">
            <p className="text-multi-base">
              <strong>Base</strong> text and background colors.
            </p>
          </div>
          <div className="bg-multi-inverted rounded-xl p-8 shadow-xl">
            <p className="text-multi-inverted">
              <strong>Inverted</strong> text and background colors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
