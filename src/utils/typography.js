import Typography from "typography"
/*import grandViewTheme from "typography-theme-grand-view"*/
import kirkhamTheme from "typography-theme-kirkham"

/*const typography2 = new Typography(grandViewTheme)*/
const typography = new Typography(kirkhamTheme)

// Export helper functions
/*export const { scale, rhythm, options } = typography2*/
export const rhythm = typography.rhythm
export default typography
/*export default typography2;*/