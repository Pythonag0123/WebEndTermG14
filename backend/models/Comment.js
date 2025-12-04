import pool from "../config/db.js";

export const addComment = async ({ complaintId, userId, message }) => {
  const [result] = await pool.query(
    `INSERT INTO comments (complaint_id, user_id, message) VALUES (?, ?, ?)`,
    [complaintId, userId, message]
  );
  return result.insertId;
};

export const getCommentsForComplaint = async (complaintId) => {
  const [rows] = await pool.query(
    `SELECT c.*, u.name AS user_name
     FROM comments c
     JOIN users u ON c.user_id = u.id
     WHERE complaint_id = ?
     ORDER BY c.created_at ASC`,
    [complaintId]
  );
  return rows;
};
