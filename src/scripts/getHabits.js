import axios from "axios";

export default function getHabits(userData, arrHabits, setArrHabits) {
    console.log('userData getHabits: ',userData);
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
        {
            headers:
                { "Authorization": `Bearer ${userData.token}` }
        }
    );

    promise.then(response => {
        console.log('resposta servidor: ', response.data);
        setArrHabits(response.data);
        console.log('arrHabits: getHabits', arrHabits);
    });
    promise.catch(error => alert('Erro de chamar oshabitos: ', error));
};