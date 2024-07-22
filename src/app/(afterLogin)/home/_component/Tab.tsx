"use client";

import { useState } from 'react';
import style from './tab.modules.css';

export default function Tab() {
    const [tab, setTab] = useState('');

    return (
        <div className={style.homeFixed}></div>
    );

}