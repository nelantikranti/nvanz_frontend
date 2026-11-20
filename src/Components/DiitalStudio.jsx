import { useState } from 'react'
import { liftOptionCategories } from '../data/liftOptions.js'

const initialCategory = liftOptionCategories[0]

function DigitalStudio() {
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory.id)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [isDropTarget, setIsDropTarget] = useState(false)

  const activeCategory = liftOptionCategories.find(
    ({ id }) => id === activeCategoryId,
  )

  const selectedCount = Object.keys(selectedOptions).length

  function selectOption(categoryId, option) {
    setSelectedOptions((current) => {
      if (current[categoryId]?.id === option.id) {
        const next = { ...current }
        delete next[categoryId]
        return next
      }

      return { ...current, [categoryId]: option }
    })
  }

  function handleDrop(event) {
    event.preventDefault()
    setIsDropTarget(false)

    const categoryId = event.dataTransfer.getData(
      'application/x-lift-option-category',
    )
    const optionId = event.dataTransfer.getData('application/x-lift-option-id')
    const category = liftOptionCategories.find(({ id }) => id === categoryId)
    const option = category?.options.find(({ id }) => id === optionId)

    if (category && option) {
      setSelectedOptions((current) => ({ ...current, [category.id]: option }))
      setActiveCategoryId(category.id)
    }
  }

  return (
    <div className="grid min-h-0 w-full flex-1 grid-cols-1 bg-[#f4f4f1] lg:grid-cols-[minmax(0,1fr)_430px]">
      <section
        className={`relative flex min-h-[280px] flex-col items-center justify-center border-b px-6 py-10 text-center transition-colors duration-200 lg:border-b-0 lg:border-r ${
          isDropTarget
            ? 'border-[#a77a25] bg-[#fbf8f0]'
            : 'border-[#e1e1dc] bg-[#f4f4f1]'
        }`}
        aria-label="Cabin preview area"
        onDragEnter={() => setIsDropTarget(true)}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsDropTarget(false)
          }
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        {isDropTarget && (
          <span className="absolute right-4 top-4 rounded-full border border-[#d8c99e] bg-white/80 px-3 py-1 text-xs font-medium text-[#86651f]">
            Drop to apply finish
          </span>
        )}
        <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border border-[#deded8] bg-white text-[#77786f] shadow-sm">
          <svg
            aria-hidden="true"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3.75h14a1.25 1.25 0 0 1 1.25 1.25v14A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19V5A1.25 1.25 0 0 1 5 3.75Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m-6-4 3-3-3-3m12 6-3-3 3-3"
            />
          </svg>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#898a80]">
          Digital studio
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#242623]">
          Cabin preview
        </h1>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#74756d]">
          Your cabin design preview will appear here as you choose finishes.
        </p>
      </section>

      <aside className="flex min-h-0 flex-col bg-white" aria-label="Cabin options">
        <div className="border-b border-[#ecece7] px-5 pb-5 pt-6 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a77a25]">
                Personalise your lift
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#242623]">
                Cabin finishes
              </h2>
            </div>
            <span className="rounded-full bg-[#f4f4f1] px-3 py-1.5 text-xs font-medium text-[#686960]">
              {selectedCount} of {liftOptionCategories.length} selected
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            {liftOptionCategories.map((category) => {
              const isActive = category.id === activeCategoryId
              const isSelected = Boolean(selectedOptions[category.id])

              return (
                <button
                  aria-pressed={isActive}
                  className={`flex min-h-11 cursor-pointer items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a77a25] ${
                    isActive
                      ? 'border-[#a77a25] bg-[#fbf8f0] text-[#242623]'
                      : 'border-[#e8e8e2] bg-white text-[#686960] hover:border-[#c9b57f] hover:bg-[#fcfbf7]'
                  }`}
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  type="button"
                >
                  <span>{category.label}</span>
                  {isSelected && (
                    <span
                      aria-label="Selection complete"
                      className="size-2 shrink-0 rounded-full bg-[#a77a25]"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex-1 px-5 py-5 sm:px-7">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[#242623]">
              {activeCategory.label}
            </h3>
            <p className="mt-1 text-xs leading-5 text-[#85867d]">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {activeCategory.options.map((option) => {
              const isSelected = selectedOptions[activeCategoryId]?.id === option.id

              return (
                <button
                  aria-pressed={isSelected}
                  className={`group cursor-pointer rounded-xl border p-2.5 text-left transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-[#c9b57f] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a77a25] ${
                    isSelected
                      ? 'border-[#a77a25] bg-[#fbf8f0] ring-1 ring-[#a77a25]'
                      : 'border-[#e8e8e2] bg-white'
                  }`}
                  draggable
                  key={option.id}
                  onClick={() => {
                    selectOption(activeCategoryId, option)
                  }}
                  onDragStart={(event) => {
                    event.dataTransfer.setData(
                      'application/x-lift-option-category',
                      activeCategoryId,
                    )
                    event.dataTransfer.setData(
                      'application/x-lift-option-id',
                      option.id,
                    )
                    event.dataTransfer.effectAllowed = 'copy'
                  }}
                  type="button"
                >
                  <span
                    className={`relative flex h-[76px] items-center justify-center overflow-hidden rounded-lg ${
                    option.shape ? 'bg-[#f3f2ee]' : ''
                    }`}
                    style={option.color ? { backgroundColor: option.color } : undefined}
                  >
                    {option.shape ? (
                      <span
                        className={`block h-10 w-10 border-2 border-[#8b8b81] bg-white/70 transition-colors group-hover:border-[#a77a25] ${
                          option.shape === 'rounded'
                            ? 'rounded-xl'
                            : option.shape === 'panoramic'
                              ? 'h-9 w-12 rounded-md'
                              : option.shape === 'compact'
                                ? 'h-9 w-8 rounded-sm'
                                : option.shape === 'executive'
                                  ? 'h-11 w-11 rounded-2xl'
                                  : 'rounded-sm'
                        }`}
                      />
                    ) : (
                      <span className="absolute inset-x-0 bottom-0 bg-black/10 px-2 py-1 text-left text-[9px] font-semibold uppercase tracking-wide text-white">
                        {option.finish}
                      </span>
                    )}
                    {isSelected && (
                      <span className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-[#a77a25] text-white">
                        <svg
                          aria-hidden="true"
                          className="size-3"
                          fill="none"
                          viewBox="0 0 16 16"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m3.5 8.5 3 3 6-7"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block truncate text-xs font-semibold text-[#33342f]">
                    {option.name}
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-[#85867d]">
                    {option.detail}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

      </aside>
    </div>
  )
}

export default DigitalStudio
