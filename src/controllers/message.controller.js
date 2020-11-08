import Message from "../entities/Message.js";

export const findAll = async (req, res) => {
  let response = {};
  try {
    const { page } = req.params;
    const actualPage = parseInt(page) > 0 ? parseInt(page) : 1;
    const messagesPerPage = 10;

    const pages = await Message.find().countDocuments();
    const message = await Message.find()
      .skip(messagesPerPage * actualPage - messagesPerPage)
      .limit(messagesPerPage);

    response = {
      code: 200,
      error: null,
      data: {
        currentPage: actualPage,
        prevPage: actualPage > 1 ? actualPage - 1 : parseInt(page),
        nextPage: actualPage < pages ? actualPage + 1 : 1,
        message,
      },
    };
  } catch (e) {
    response = {
      code: 301,
      error: e,
      data: null,
    };
  }

  res.json(response);
};

export const create = async (req, res) => {
  const message = new Message(req.body);
  let response = {};
  try {
    await message.save();
    response = {
      code: 200,
      error: null,
      data: {
        created: 1,
      },
    };
  } catch (e) {
    response = {
      code: 301,
      error: e,
      data: {
        created: 0,
      },
    };
  }
  res.json(response);
};

export const findOne = async (req, res) => {
  const { id } = req.params;
  let response = {};
  try {
    const message = await Message.findById(id);
    response = {
      code: 200,
      error: null,
      data: {
        message,
      },
    };
  } catch (e) {
    response = {
      code: 301,
      error: e,
      data: null,
    };
  }

  res.json(response);
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  let response = {};
  await Message.findByIdAndDelete(id)
    .then(() => {
      response = {
        code: 200,
        error: null,
        data: {
          deleted: 1,
        },
      };
    })
    .catch((e) => {
      response = {
        code: 301,
        error: e,
        data: {
          deleted: 0,
        },
      };
    });

  res.json(response);
};

export const updateOne = async (req, res) => {
  const { id } = req.params;
  let response = {};

  await Message.findByIdAndUpdate(id, req.body)
    .then(() => {
      response = {
        code: 200,
        error: null,
        data: {
          updated: 1,
        },
      };
    })
    .catch((e) => {
      response = {
        code: 301,
        error: e,
        data: {
          updated: 0,
        },
      };
    });

  res.json(response);
};
