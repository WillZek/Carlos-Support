let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> _*`Hola!,Fui Diseñado Para La Administración y Gestión De Grupos, Este Es El Número De Mi Creador`*_\n\n *David Alexander* : Wa.me/18297448661"
await conn.sendFile(m.chat, "https://files.catbox.moe/ge77oy.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler