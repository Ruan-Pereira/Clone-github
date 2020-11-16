import styled, { css } from 'styled-components';

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';

import { AiOutlineFork } from 'react-icons/ai';


export const Container = styled.div`
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       padding:16px;
       border: 1px solid var(--border);
       border-radius:6px;
`;

export const Topside = styled.div`
    > header{
        display:flex;
        align-items:center;
        
      
        > a {
            margin-left:8px;
            font-size:14px;
            font-weight: 600;
            color: var(--link);

            text-decoration:none;


            &:focus, &:hover{
                text-decoration: underline;
            }
        }
    }
    > p {
        margin: 8px 0 16px;
        font-size:12px;
        font-weight: 600;
        color: var(--gray);
        letter-spacing: 0.1 px;
    }
    > h3 {
        font-size:16px;     
        color: var(--username);
        font-weight: 300;
        padding:10px 0px;
}
`;
export const Botside = styled.div`
    ul {
        display:flex;
        align-items:center;

        > li {
            display: flex;
            align-items:center;
            margin-right:16px;

            > span{
                margin-left:5px;
                font-size: 12px;
                color: var(--gray);
            }
        }
    }
    .language {
        width:12px;
        height:12px;
        border-radius: 50%;
        flex-shrink: 0;

        &.other {
            background: var(--other-language);
        }
        &.javascript {
            background: var(--javascript);
        }
        &.typescript {
            background: var(--typescript);
        }

    }
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink: 0;
    
`;
export const Repoicon = styled(RiBookMarkLine)`${iconCSS}`;

export const StartIcon = styled(RiStarLine)`${iconCSS}`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}`;


