import React, {useEffect} from 'react';

import { withApplicationInsights } from '../components/telemetry';
import {msalConfig} from "../msal/authConfig";
import * as msal from "@azure/msal-browser";

const MsalTest = () => {
    useEffect(() => {
        const myMSALObj = new msal.PublicClientApplication(msalConfig);
        console.log(myMSALObj);
    }, []);

    return (
        <>
            aaaaa
        </ >
    );
};

export default withApplicationInsights(MsalTest, 'MsalTest');