import LayoutSidebar from "@fooddy/components/LayoutSidebar";
import RegisterFormPage from "@fooddy/components/RegisterForm";

export default function LoginPage() {
    return (
        <LayoutSidebar>
            <div className="w-full flex justify-center items-center min-h-screen p-6 bg-gray-100">
                <div className="max-w-2xl w-full border p-6 ">
                    <h1 className="text-xl font-semibold text-center">Sign Up Form</h1>
                    <RegisterFormPage />
                </div>
            </div>
        </LayoutSidebar>
    )
}