export interface ILink {
  text: string
  route: string
}

export interface IHeaderDropdown {
  text?: string
  route?: string
  links: ILink[]
}

export interface ISocialLink {
  route: string
  icon: string
  alt: string
}
