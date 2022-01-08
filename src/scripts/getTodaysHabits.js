import axios from "axios";

export default function getTodaysHabits(token, setTodaysHabits) {

    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
        {
            headers:
                { "Authorization": `Bearer ${token}` }
        }
    );

    promise.then(response => {
        setTodaysHabits(response.data);
    });
    promise.catch(error => alert('Erro de chamar os habitos de hoje: ', error));
}