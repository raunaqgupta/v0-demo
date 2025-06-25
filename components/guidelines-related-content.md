# Related Content Component Guidelines

## Overview
The Related Content component displays a horizontal group of buttons that represent related or suggested content. It's designed to help users discover additional relevant information or actions. Titles for the component should be provided externally.

## Usage
- Use to suggest related articles, pages, or actions
- Limit to 5 buttons maximum to avoid overwhelming users
- Place at the end of content sections or in sidebars
- Use consistent button variants within the same group
- Provide titles for the component using appropriate heading elements (e.g., `<h2>`, `<h3>`) to maintain semantic structure and accessibility.

## Accessibility
- Ensure button labels are descriptive and meaningful
- Use proper heading hierarchy for the title
- Consider keyboard navigation between buttons
- Provide alternative text for icon-only buttons

## Best Practices
- Keep button labels concise and actionable
- Use consistent styling within the same group
- Consider the visual hierarchy and placement
- Test on mobile devices for proper wrapping

## Variants
- **Outline** (default): Clean, minimal appearance
- **Secondary**: More prominent than outline
- **Ghost**: Subtle, text-like appearance
- **Link**: For navigation-focused content

## Examples
Instead of a title prop, titles should be provided externally using appropriate heading elements:

\`\`\`html
<h2>Related Articles</h2>
<RelatedContent buttons={[...]} />
\`\`\`

- "Related Articles" at the end of blog posts
- "Suggested Actions" in dashboards
- "Quick Links" in navigation areas
- "See Also" sections in documentation
