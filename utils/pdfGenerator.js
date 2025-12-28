import PDFDocument from "pdfkit";

export function generatePDF({ name, roadmap }) {
  return new Promise(resolve => {
    const doc = new PDFDocument();
    const chunks = [];

    doc.on("data", c => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(20).text("Lumen Path – Career Blueprint");
    doc.moveDown();

    roadmap.forEach(step => {
      doc.fontSize(12).text(
        `Week ${step.week}: ${step.focus} — ${step.reason}`
      );
    });

    doc.end();
  });
}
