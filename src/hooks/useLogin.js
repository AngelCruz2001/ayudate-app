import React, { useState } from 'react'

export const useLogin = ({ initialValue }) => {

    const [isLogin, setisLogin] = useState(initialValue)

    const handleClick = () => setisLogin(prev => !prev)

    return [isLogin, handleClick]
}
