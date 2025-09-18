import { BackToTop } from "./BackToTop"
import { FooterDescLine } from "./FooterDescline"
import { FooterLine } from "./FooterLine"
import { FooterVerticalColumn } from "./FooterVerticalColumn"
import { Paditem } from "./PadItemLine"


export const Footer = () => {


    return (
        <>
            <BackToTop/>
            <FooterVerticalColumn/>
            <FooterLine/>
            <Paditem/>
            <FooterDescLine/>
        </>
    )

}