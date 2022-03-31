import Sortable from 'sortablejs';
import { results } from '../movies';

const initSortable = () => {
  const options = {
    animation: 300,
    ghostClass: "grapes",
    onEnd: (event) => {
      const oldIndex = event.oldIndex;
      const newIndex = event.newIndex;
      console.log(`movie at position ${oldIndex} has moved to ${newIndex}`);
    }
  };
  Sortable.create(results, options);
};

export { initSortable };
