import React, {useState} from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};
export type FilterType = 'all' | AffairPriorityType;

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
    let newAffairs = affairs.filter(a => a.priority === filter);

    if (filter === 'all') {
        return affairs
    } else return newAffairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
    let deletedAffairs: Array<AffairType> = affairs.filter(a => a._id !== _id)
    return deletedAffairs
}

function HW2() {
    let [affairs, setAffairs] = useState<Array<AffairType>>([
        {_id: 1, name: 'React', priority: 'high'},
        {_id: 2, name: 'anime', priority: 'low'},
        {_id: 3, name: 'games', priority: 'low'},
        {_id: 4, name: 'work', priority: 'high'},
        {_id: 5, name: 'html & css', priority: 'middle'},
    ]);
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    );
}

export default HW2;
