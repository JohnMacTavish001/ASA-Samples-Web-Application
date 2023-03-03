import React, {useEffect} from 'react';

import { withApplicationInsights } from '../components/telemetry';
import {msalConfig} from "../msal/authConfig";
import * as msal from "@azure/msal-browser";

const MsalTest = () => {
    useEffect(() => {
        console.log('aaaaa');
        const myMSALObj = new msal.PublicClientApplication(msalConfig);
        console.log(myMSALObj);
        const plus = require("../jsLib/jsUtil")
        console.log(plus("aaa", "bbb"))
    }, []);

    return (
        <>
            aaaaa
        </ >
    );
};

export default withApplicationInsights(MsalTest, 'MsalTest');