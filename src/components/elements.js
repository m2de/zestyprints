import tw from 'tailwind.macro'
import styled from "@emotion/styled"

export const Top = tw.div`w-full flex justify-center p-8 text-4xl`
export const Bottom = tw.div`w-full flex justify-center p-8 text-xl`
export const Middle = tw.div`w-full flex justify-between items-center text-xl`
export const Square = styled.div`
    ${tw`flex flex-col justify-center items-center p-4 text-center leading-relaxed text-xl`}

    width: 250px;
    height: 250px;
    @media only screen and (min-width: 500px) {
        width: 450px;
        height: 450px;
    }
`

export const Vertical = styled.div`
  writing-mode: vertical-lr;
  text-orientation: upright;
  ${tw`p-4`}
`

export default {
    Top,
    Bottom,
    Middle,
    Vertical,
}
