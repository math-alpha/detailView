import { useEffect, useState } from 'react';
import { fetchExamData } from '../utils/api';
import Exam from '../components/Exam';

export default function Home() {
    const [examData, setExamData] = useState(null);

    useEffect(() => {
        const getExamData = async () => {
            const data = await fetchExamData();
            setExamData(data);
        };
        getExamData();
    }, []);

    return (
        <div>
            {examData ? (
                <Exam data={examData} />
            ) : (
                <p>Loading exam data...</p>
            )}
        </div>
    );
}
