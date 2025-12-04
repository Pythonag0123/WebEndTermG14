import pool from "../config/db.js";

export const createComplaint = async ({
  userId,
  categoryId,
  title,
  description,
  priority,
  attachmentPath
}) => {
  const [result] = await pool.query(
    `INSERT INTO complaints 
      (user_id, category_id, title, description, priority, status, attachment_path) 
     VALUES (?, ?, ?, ?, ?, 'NEW', ?)`,
    [userId, categoryId, title, description, priority, attachmentPath]
  );
  return result.insertId;
};

export const getComplaintById = async (id) => {
  const [rows] = await pool.query(
    `SELECT c.*, u.name AS user_name, cat.name AS category_name
     FROM complaints c
     JOIN users u ON c.user_id = u.id
     JOIN categories cat ON c.category_id = cat.id
     WHERE c.id = ?`,
    [id]
  );
  return rows[0];
};

export const getComplaintsByUser = async (userId) => {
  const [rows] = await pool.query(
    `SELECT c.*, cat.name AS category_name
     FROM complaints c
     JOIN categories cat ON c.category_id = cat.id
     WHERE c.user_id = ?
     ORDER BY c.created_at DESC`,
    [userId]
  );
  return rows;
};

export const getComplaintsForAgent = async (department) => {
  const [rows] = await pool.query(
    `SELECT c.*, u.name AS user_name, cat.name AS category_name
     FROM complaints c
     JOIN users u ON c.user_id = u.id
     JOIN categories cat ON c.category_id = cat.id
     WHERE cat.department = ?
     ORDER BY c.created_at DESC`,
    [department]
  );
  return rows;
};

export const getAllComplaints = async () => {
  const [rows] = await pool.query(
    `SELECT c.*, u.name AS user_name, cat.name AS category_name
     FROM complaints c
     JOIN users u ON c.user_id = u.id
     JOIN categories cat ON c.category_id = cat.id
     ORDER BY c.created_at DESC`
  );
  return rows;
};

export const updateComplaintStatus = async (id, status) => {
  await pool.query(`UPDATE complaints SET status = ? WHERE id = ?`, [
    status,
    id
  ]);
};

export const assignComplaint = async (id, agentId) => {
  await pool.query(
    `UPDATE complaints SET assigned_to = ?, status = 'ASSIGNED' WHERE id = ?`,
    [agentId, id]
  );
};
