import { css } from "@emotion/core"
import tw from 'tailwind.macro'

export const Body = css`
    html, #___gatsby, #gatsby-focus-wrapper {
        ${tw`h-full`}
    }
    body {
        ${tw`font-body w-full h-full flex flex-col items-center justify-center`}
    }
`
