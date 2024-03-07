import { create } from 'zustand';

const useCreatePlaylist = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreatePlaylist;
