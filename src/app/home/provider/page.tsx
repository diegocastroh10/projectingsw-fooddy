import LayoutSidebar from "@fooddy/components/LayoutSidebar"
import ProviderBars from "@fooddy/components/ProviderBars";
import ProviderStats from "@fooddy/components/ProviderStats";

export default function ProviderPage() {
    return (
        <LayoutSidebar>
            <main className="min-h-screen">
                <ProviderStats />
                <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                    <ProviderBars />
                </div>
            </main>
        </LayoutSidebar>
    );
};