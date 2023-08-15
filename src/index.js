import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_nXJmSR86wGH7Lbl4GbCAxbWLfKpMa3lJM0q9uX0Q5B21lYvsZapTKhLLUWQL36NI";


new SlimSelect({
    select: '#single'
});

