export const inputsRegister = {
    professional: [
        {
            id: 'email',
            name: 'email',
            placeholder: 'Correo electronico',
            type: 'email',
            icon: 'envelope',
        },
        {
            id: 'password',
            name: 'password',
            placeholder: 'Contraseña',
            type: 'password',
            icon: 'lock',

        },
        {
            id: 'curp',
            name: 'curp',
            placeholder: 'CURP',
            type: 'text',
            icon: 'id-badge',
            maxLength: 18,
        },
        {
            id: 'fname',
            name: 'fname',
            placeholder: 'Nombre(s)',
            type: 'text',
            icon: 'user',
            maxLength: 12,
        },
        {
            id: 'lname',
            name: 'lname',
            placeholder: 'Apellido(s)',
            type: 'text',
            icon: 'user',
            maxLength: 12,
        },
        {
            id: 'phone',
            name: 'phone',
            placeholder: 'Teléfono',
            type: 'text',
            icon: 'phone',
            maxLength: 10,
        },
        {
            id: 'schedule',
            name: 'schedule',
            placeholder: 'Horario ',
            type: 'text',
            icon: 'clock',
        },
        {
            id: 'document1',
            name: 'document1',
            placeholder: 'Cédula',
            type: 'file',
            icon: 'file',
        },
        {
            id: 'document2',
            name: 'document2',
            placeholder: 'Foto',
            type: 'file',
            icon: 'image',
        }
    ],

    patient: [
        {
            id: 'email',
            name: 'email',
            placeholder: 'Correo electronico',
            type: 'email',
            icon: 'envelope',
        },
        {
            id: 'password',
            name: 'password',
            placeholder: 'Contraseña',
            type: 'password',
            icon: 'lock',
        },
        {
            id: 'fname',
            name: 'fname',
            placeholder: 'Nombre(s)',
            type: 'text',
            icon: 'user',
            maxLength: 20,
        },
        {
            id: 'lname',
            name: 'lname',
            placeholder: 'Apellido(s)',
            type: 'text',
            icon: 'user',
            maxLength: 30,
        },
        {
            id: 'phone',
            name: 'phone',
            placeholder: 'Teléfono',
            type: 'text',
            icon: 'phone',
            maxLength: 10,
        },
        {
            id: 'description',
            name: 'description',
            placeholder: 'Descripción',
            type: 'textarea',
            icon: 'file-text',
            maxLength: 255,
        },
    ]
}