import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'arch-social',
    styleUrl: './social.scss'
})
export class SocialNetwork {
  @Prop() networks: string
  @Prop() withText: boolean
  @Prop() insights: object

    
    render() {
      const parsedNetworks = JSON.parse(this.networks)
      const networksArray = Object.keys(parsedNetworks)
      return (
        networksArray.length > 0 && networksArray.map(network => {
          const insights = this.insights ? { ...this.insights, 'data-insights-category': network} : {}
          return (
            <div class='social-network__item'>
              <a class='social-network__link' href={parsedNetworks[network]} {...insights} >
                <arch-icon classes='svg-icon--without-hover' svg={network}></arch-icon>
              </a>
              {this.withText && <span>{network}</span>}
            </div>
          )
        })
      )
    }
}