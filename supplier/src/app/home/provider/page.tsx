import LayoutSidebar from "@fooddy/components/LayoutSidebar"
import ProviderBars from "@fooddy/components/ProviderBars";
import ProviderStats from "@fooddy/components/ProviderStats";
import ProviderRecentsOrders from "@fooddy/components/ProviderRecentsOrders";


export default function ProviderPage() {
    return (
        <LayoutSidebar>
            <main className="ml-10 w-full min-h-screen bg-gray-100">
                <ProviderStats />
                <div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4 w-full mx-auto">  
                <ProviderBars />
                <ProviderRecentsOrders />
                </div>
            </main>
        </LayoutSidebar>

    );
};