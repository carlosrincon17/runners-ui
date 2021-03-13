import { Link } from "react-router-dom";
import { useState } from "react";
import { renderFormInput } from '../../util/input.util';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };

    const renderInput = (name, label, options = {}) => {
        return renderFormInput(name, label, handleInputChange, options);
    }

    const submitLoginForm = (event) => {
        event.preventDefault();
        console.log(formData)
    };

    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

            <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section class="logo-section">
                    <img src='/assets/images/runners.png' />
                </section>

                <section class="mt-10">
                    <form class="flex flex-col" onSubmit={submitLoginForm}>
                        {renderInput("email", "Email", { size: 'full'})}
                        {renderInput("password", "Contraseña", { type: 'password', size: 'full'})}
                        <div class="flex justify-end">
                            <a class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Olvidaste tu contraseña?</a>
                        </div>
                        <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Ingresar</button>
                    </form>
                </section>

            </main>

            <div class="max-w-lg mx-auto text-center mt-12 mb-6">
                <p class="text-white">No tienes cuenta aún? <Link to="/register" class="font-bold hover:underline">Registrate</Link>.</p>
            </div>

            <footer class="max-w-lg mx-auto flex justify-center text-white">
                <a class="hover:underline">Contact</a>
                <span class="mx-3">•</span>
                <a class="hover:underline">Privacy</a>
            </footer>
        </div>
    );
}

export default Login;