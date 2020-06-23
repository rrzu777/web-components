import { Component, Prop, h } from "@stencil/core";
import svgs from './icons'

@Component({
    tag: 'arch-icon',
    styleUrl: './icon.scss'
})
export class Icon {
    /**
     * The svg icon name
    */
   @Prop() svg: string
   /**
    * The svg icon css classes
    * 'svg-icon--selected' - Active class
    * 'svg-icon--without-hover' - Icon without interaction
    * 'svg-icon--without-fill' - Icon without add a fill color (keep original fill color)
    * 
   */
    @Prop() classes: string = ''
    
    render() {
        const classes = `svg-icon svg-icon--${this.svg} ${this.classes}`
        return (
            svgs[this.svg]
            ? (
                <svg
                    viewBox={svgs[this.svg].viewBox}
                    class={classes}
                    xmlns='http://www.w3.org/2000/svg'>
                    {svgs[this.svg].svg}
                </svg>
            )
            : null
        )
    }
}