import HomePageSearchForm from '@/components/home_page/search_form';
import AdvBar from '@/components/home_page/adv_bar';
import ProposeTicket from '@/components/home_page/propose_ticket';

export default function Home() {
    return (
        <main className="flex flex-wrap justify-center p-4">
            <HomePageSearchForm />
            <AdvBar />
            <ProposeTicket />
        </main>
    );
}
