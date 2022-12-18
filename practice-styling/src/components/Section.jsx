import { useEffect, useState } from "react";
import styled from "styled-components";

function Section(){

    const [idx, setIdx] = useState(0);
    const [isScrolling , setIsScrolling] = useState(false);

    useEffect(()=>{   

        window.scrollTo({top : idx * window.innerHeight,behavior :"smooth"});
        



        const handleIdx = (e) => {
            e.preventDefault();
            if(isScrolling) return;
            if(e.deltaY < 0 && idx === 0) return;
            if(e.deltaY > 0 && idx === 3) return;
            setIsScrolling(true);
            setTimeout(() => {
                setIsScrolling(false);
            },500);
            if(e.deltaY > 0) setIdx(idx + 1);
            else setIdx(idx - 1);
        };

        window.addEventListener("wheel", handleIdx , {passive:false});

        return () => window.removeEventListener("wheel", handleIdx , {passive:false});

    },[idx , isScrolling]);

    return (
    <div>
        <SectionalBlock bgColor="red">1</SectionalBlock>
        <SectionalBlock bgColor="lime">2</SectionalBlock>
        <SectionalBlock bgColor="blue">3</SectionalBlock>
        <SectionalBlock bgColor="lightgreen">4</SectionalBlock>
    </div>
    );

}

const SectionalBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
    width: 100vw;
    height: 100vh;
    background-color: ${({bgColor})=> bgColor};
`

export default Section;