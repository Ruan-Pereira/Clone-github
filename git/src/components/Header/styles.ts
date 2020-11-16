import styled from 'styled-components';


import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background:  #24292e ;
    padding: 11px 16px;
    margin:0;
    width:100%;
`;

export const Githublogo = styled(FaGithub)`
    fill: #fff;
    width:32px;
    height:32px;
    flex-shrink:0;

    cursor: pointer;

    &:hover {
        opacity:0.8;
    } 
`;

export const SearchForm = styled.form`
    padding-left:16px;
    width: 100%;

    input{
        background: var(--search);
        outline:0;
        border-radius:6px;
        padding:7px 12px;
        width:90%;
        color:#fff;

    &:focus {
        width:310px;
    }

        transition: width .1s ease-out, color ,2s;
    }
`;
