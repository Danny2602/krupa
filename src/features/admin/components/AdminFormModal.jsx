import { AnimatePresence, motion } from "framer-motion";

/**
 * Modal reutilizable para formularios admin
 * Uso:
 * <AdminFormModal 
 *   isOpen={isOpen} 
 *   setIsOpen={setIsOpen} 
 *   title="Título"
 *   onSubmit={handleSubmit}
 *   submitText="Guardar"
 * >
 *   {children (form fields)}
 * </AdminFormModal>
 */
function AdminFormModal({
    isOpen,
    setIsOpen,
    children,
    title,
    icon: Icon,
    onSubmit,
    submitText = "Guardar",
    cancelText = "Cancelar"
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/50 backdrop-blur-sm fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer p-8"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg w-full max-w-2xl shadow-2xl cursor-default relative overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
                            <div className="flex items-center gap-3">
                                {Icon && (
                                    <div className="bg-white p-3 rounded-full">
                                        <Icon className="text-purple-600 text-2xl" />
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-white">
                                    {title}
                                </h3>
                            </div>
                        </div>

                        {/* Content */}
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4 mb-6">
                                {children}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 justify-end pt-4 border-t">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                                >
                                    {cancelText}
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:from-purple-700 hover:to-purple-900 transition-colors font-medium"
                                >
                                    {submitText}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export { AdminFormModal };
