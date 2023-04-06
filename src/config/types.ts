type DescriptionType = {
  title: string
  desc: string
  side: 'left' | 'right'
}

export type ProjectType = {
  id: number
  title: string
  imgPath: string
  mainsTag: Array<string>
  secondsTags: Array<string>
  filter: string
  imgAccueil: string
  client: Array<string>
  role: Array<string>
  credits: Array<string>
  description: Array<DescriptionType>
  renduFinal: boolean
  hrefButton: string
  video: boolean
  videoPath: string
}
