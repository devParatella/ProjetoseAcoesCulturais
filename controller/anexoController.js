const Anexo = require("../models/anexoModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const armazenamento = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ armazenamento });

const listarAnexos = async (req, res) => {
  try {
    const anexos = await Anexo.findAll();
    res.status(200).json(anexos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar anexos", error });
  }
};

const obterAnexoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const anexo = await Anexo.findByPk(id);
    if (!anexo) {
      return res.status(404).json({ message: "Anexo não encontrado" });
    }
    res.status(200).json(anexo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter anexo", error });
  }
};

const criarAnexo = async (req, res) => {
  upload.single("files")(req, res, async () => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao enviar arquivo", error: err });
    }
  });

  try {
    const novoAnexo = await Anexo.create({
      nome_arquivo: req.file.originalname,
      caminho_arquivo: req.file.path,
    });
    res.status(201).json(novoAnexo);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar anexo", error });
  }
};


//implementar a partir daqui o Multer e o path
const atualizarAnexo = async (req, res) => {
  const { id } = req.params;
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao enviar arquivo', error: err });
    }
    try {
      const anexoExistente = await Anexo.findByPk(id);
      if (!anexoExistente) {
        return res.status(404).json({ message: 'Anexo não encontrado' });
      }

      if (req.file) {
        // Deletar o arquivo antigo
        fs.unlinkSync(anexoExistente.caminho_arquivo);

        // Atualizar com o novo arquivo
        anexoExistente.nome_arquivo = req.file.originalname;
        anexoExistente.caminho_arquivo = req.file.path;
      }

      await anexoExistente.save();
      res.status(200).json({ message: 'Anexo atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar anexo', error });
    }
  });
};

const deletarAnexo = async (req, res) => {
  const { id } = req.params;
  try {
    const anexo = await Anexo.findByPk(id);
    if (!anexo) {
      return res.status(404).json({ message: 'Anexo não encontrado' });
    }

    // Deletar o arquivo do sistema de arquivos
    fs.unlinkSync(anexo.caminho_arquivo);

    await Anexo.destroy({ where: { id_anexo: id } });
    res.status(200).json({ message: 'Anexo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar anexo', error });
  }
};

module.exports = {
  listarAnexos,
  obterAnexoPorId,
  criarAnexo,
  atualizarAnexo,
  deletarAnexo,
};