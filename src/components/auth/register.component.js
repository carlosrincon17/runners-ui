import React, { useState } from 'react';
import { MASKS } from '../../util/mask.util';
import UserService from '../../services/user.service';
import { renderFormInput } from '../../util/input.util';

const Register = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        addess: '',
        phone_number: '',
        birth_data: '',
        password: '',
        repeat_password: '',
        document_numner: '',
        country: '',
        birth_date: ''
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const submitRegisterForm = (event) => {
        event.preventDefault();
        const userService = new UserService();
        const createUserResponse = userService.createUser(formData)
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    const renderInput = (name, label, options = {}) => {
        return renderFormInput(name, label, handleInputChange, options);
    }

    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <main class="bg-white max-w-lg-register mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <div class="mb-5 text-center">
                    <div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                        <img id="image" class="object-cover w-full h-32 rounded-full" />
                    </div>
                    <label
                        for="fileInput"
                        type="button"
                        class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
								Browse Photo
							</label>

                    <div class="mx-auto w-48 text-gray-500 text-xs text-center mt-1">Click to add profile picture</div>

                    <input name="photo" id="fileInput" accept="image/*" class="hidden" type="file" change="let file = document.getElementById('fileInput').files[0];
								var reader = new FileReader();
								reader.onload = (e) => image = e.target.result;
								reader.readAsDataURL(file);" />
                </div>

                <form className="w-full flex flex-wrap" onSubmit={submitRegisterForm}>
                    {renderInput("first_name", "Nombres")}
                    {renderInput("last_name", "Apellidos")}
                    {renderInput("country", "Pais")}
                    {renderInput("city", "Ciudad")}
                    {renderInput("document_number", "Número de Documento", {pattern: '[0-9]*'})}
                    {renderInput("birth_date", "Fecha de Nacimiento", {mask: MASKS.date})}
                    {renderInput("phone_number", "Número Telefoníco", {mask: MASKS.phone})}
                    {renderInput("address", "Dirección", { size: 'full' })}
                    {renderInput("email", "Email", { size: 'full' })}
                    {renderInput("password", "Contraseña", { type: 'password' })}
                    {renderInput("repeat_password", "Repite tu contraseña", { type: 'password' })}
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                        type="submit" >Registrarse
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Register;