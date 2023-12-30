import { Poppins, Roboto_Mono } from 'next/font/google'

export const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })
export const robotoMono = Roboto_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'], variable: "--robotoMono" })