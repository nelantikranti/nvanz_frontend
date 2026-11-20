export const liftOptionCategories = [
  {
    id: 'cabinType',
    label: 'Cabin type',
    description: 'Choose a shape and style for your cabin.',
    options: [
      { id: 'square', name: 'Square', detail: 'Classic straight edges', shape: 'square' },
      { id: 'rounded', name: 'Rounded', detail: 'Soft curved corners', shape: 'rounded' },
      { id: 'panoramic', name: 'Panoramic', detail: 'Wide-view profile', shape: 'panoramic' },
      { id: 'compact', name: 'Compact', detail: 'Space-saving design', shape: 'compact' },
      { id: 'executive', name: 'Executive', detail: 'Refined rounded form', shape: 'executive' },
    ],
  },
  {
    id: 'wallPanels',
    label: 'Wall panels',
    description: 'Select a wall finish to set the tone.',
    options: [
      { id: 'brushed-steel', name: 'Brushed steel', detail: 'Cool metallic', color: '#AEB4B1', finish: 'Satin' },
      { id: 'warm-oak', name: 'Warm oak', detail: 'Natural wood', color: '#B98B5F', finish: 'Wood' },
      { id: 'champagne', name: 'Champagne', detail: 'Soft golden metal', color: '#D5C19A', finish: 'Metal' },
      { id: 'charcoal', name: 'Charcoal', detail: 'Deep matte finish', color: '#555854', finish: 'Matte' },
      { id: 'ivory-stone', name: 'Ivory stone', detail: 'Light natural stone', color: '#D9D3C5', finish: 'Stone' },
    ],
  },
  {
    id: 'ceilings',
    label: 'Ceilings',
    description: 'Pick a ceiling colour for the finishing touch.',
    options: [
      { id: 'warm-white', name: 'Warm white', detail: 'Soft and bright', color: '#F1EEE5', finish: 'Ivory' },
      { id: 'soft-gold', name: 'Soft gold', detail: 'A subtle warm glow', color: '#D8C18D', finish: 'Gold' },
      { id: 'graphite', name: 'Graphite', detail: 'Modern and understated', color: '#555751', finish: 'Dark' },
      { id: 'ice-blue', name: 'Ice blue', detail: 'Cool, calming tone', color: '#CFDFDF', finish: 'Cool' },
      { id: 'walnut', name: 'Walnut', detail: 'Rich natural warmth', color: '#80634E', finish: 'Wood' },
    ],
  },
  {
    id: 'floors',
    label: 'Floors',
    description: 'Choose a durable floor finish and shade.',
    options: [
      { id: 'limestone', name: 'Limestone', detail: 'Pale natural texture', color: '#D7D1C4', finish: 'Stone' },
      { id: 'sandstone', name: 'Sandstone', detail: 'Warm neutral tone', color: '#C4A77E', finish: 'Stone' },
      { id: 'smoke', name: 'Smoke', detail: 'Balanced grey finish', color: '#8C8D87', finish: 'Matte' },
      { id: 'dark-slate', name: 'Dark slate', detail: 'Deep mineral tone', color: '#555954', finish: 'Slate' },
      { id: 'oak-floor', name: 'Natural oak', detail: 'Light wood grain', color: '#BC9469', finish: 'Wood' },
    ],
  },
]
