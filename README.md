# V&E Fashion-Beauty UI Kit

Sistema de diseño responsive para una boutique premium de moda y belleza. La app Vite incluida funciona como catálogo visual y como referencia de implementación.

## Fundaciones

- **Tokens:** `src/tokens.css` es la única fuente de verdad para paleta primitiva, tokens semánticos, tipografía, espaciado, radios, sombras y movimiento.
- **Tipografía:** serif editorial para marca/titulares y sans serif para la interfaz. La pila prioriza fuentes de sistema para una carga robusta; la demo incorpora Playfair Display como mejora visual.
- **Uso del color:** marfil como base, negro para autoridad y champagne como acento reducido. Rose gold se reserva para estados de oferta.
- **Do:** priorizar espacio negativo, etiquetas pequeñas y contenido. **Don't:** usar dorado como superficie dominante, sombras pesadas o radios excesivos.

## Componentes incluidos

`BrandLockup`, `VEMonogram`, `Button`, `Badge`, `Input`, `Textarea`, `SearchField`, `QuantitySelector`, `ProductCard`, `ProductGrid`, `Price`, `Hero`, `OrderRequestBanner`, `Newsletter` y `WhatsAppCTA`.

Los componentes usan HTML semántico, controles nativos, foco visible, labels asociados y respetan `prefers-reduced-motion`. El layout cambia explícitamente a una navegación y cuadrícula optimizadas para móvil por debajo de 800px.

## Desarrollo

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
```

Las imágenes de demostración son remotas de Unsplash; sustitúyelas por los assets licenciados de V&E antes de producción. El lockup tipográfico es un placeholder configurable hasta recibir el logo oficial.
