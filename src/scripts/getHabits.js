import axios from "axios";

export default function getHabits(userData, arrHabits, setArrHabits) {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
        {
            headers:
                { "Authorization": `Bearer ${userData.token}` }
        }
    );

    promise.then(response => {
        setArrHabits(response.data);
    });
    promise.catch(error => alert('Erro de chamar oshabitos: ', error));
};