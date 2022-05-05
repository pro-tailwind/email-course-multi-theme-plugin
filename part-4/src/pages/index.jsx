import { useState } from 'react'

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
              onClick={() => setActiveTheme(theme)}
              data-theme={theme}
              className="rounded bg-multi-base px-5 py-2 font-medium text-multi-base shadow hover:bg-multi-base/75"
            >
              {theme}
            </button>
          ))}
        </div>

        <p className="mt-4 text-gray-500">
          Current theme: <span className="font-medium text-multi-base">{activeTheme}</span>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-multi-base p-8 shadow-xl">
            <p className="text-multi-base">
              <strong>Base</strong> text and background colors.
            </p>
          </div>
          <div className="rounded-xl bg-multi-inverted p-8 shadow-xl transition hover:md:theme-aqua:-rotate-6">
            <p className="text-multi-inverted">
              <strong>Inverted</strong> text and background colors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
