import LayoutSidebar from "@fooddy/components/LayoutSidebar";
import CreateProviderForm from "@fooddy/components/RegisterProvider";

export default function LoginPage() {
    return (
        <div className="w-full flex justify-center items-center min-h-screen p-6 bg-gray-100">
            <div className="max-w-2xl w-full border p-6 ">
                <h1 className="text-xl font-semibold text-center">Crear proveedor</h1>
                <CreateProviderForm />
            </div>
        </div>
    )
}