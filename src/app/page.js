import HomePageSearchForm from '@/components/home-page/search_form';
import AdvBar from '@/components/home-page/adv_bar';
import VeDeXuat from '@/components/home-page/ve_de_xuat';

export default function Home() {
    return (
        <main className="flex flex-wrap justify-center p-4 pb-12">
            <HomePageSearchForm />
            <AdvBar />
            <VeDeXuat />
        </main>
    );
}
