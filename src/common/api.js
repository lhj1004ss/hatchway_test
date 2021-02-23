export const URL = 'https://api.hatchways.io/assessment/students';

export const studentsData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.students;
}