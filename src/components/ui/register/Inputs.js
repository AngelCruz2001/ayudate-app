import React from 'react'

export const CustomInput = ({ getFieldProps, input, }) => {

    const passwordStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',

    }
    return (
        <>
            {
                ['text', 'email'].includes(input.type) &&
                <>
                    <i className={`fa-solid fa-${input.icon}`}></i>
                    <input
                        id={input.id}
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        {...getFieldProps(input.name)}
                    />
                </>
            }

            {
                input.type === 'file' &&
                <>
                    <i className={`fa-solid fa-${input.icon}`} />
                    <p
                        id={input.id}
                    >
                        {
                            getFieldProps(input.name).value ? getFieldProps(input.name).value.name : 'Selecciona un archivo'
                        }
                    </p>
                </>
            }

            {
                input.type === 'textarea' &&
                <>
                    <i className={`fa-solid fa-${input.icon}`} />
                    <textarea
                        id={input.id}
                        name={input.name}
                        placeholder={input.placeholder}
                        {...getFieldProps(input.name)}
                    />
                </>
            }

            {
                input.type === 'password' &&
                <div
                    className='passwordContainer'
                    style={{ ...passwordStyle, width: '100%' }}
                >
                    <div
                        style={passwordStyle}
                    >
                        <i className={`fa-solid fa-${input.icon}`} />
                        <input
                            id={input.id}
                            name={input.name}
                            placeholder={input.placeholder}
                            type={input.type}
                            {...getFieldProps(input.name)}
                        />
                    </div>
                    <div
                        style={passwordStyle}
                    >
                        <i className={`fa-solid fa-${input.icon}`} />
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            placeholder={'Confirmar contraseña'}
                            type='password'
                            {...getFieldProps('confirmPassword')}
                        />
                    </div>
                </div>
            }

        </>
    )
}
