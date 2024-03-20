const tableModel = require("../model/tableModel");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const getData = async (req, res, next) => {
  try {
    let data = await tableModel.findOne({});
    console.log(data);
    if (!data) {
      data = [];
    }
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

const addData = async (req, res, next) => {
  try {
    const { itemName } = req.body;
    let storeData = {
      value: itemName,
      _id: new ObjectId(),
    };
    const isFirstItem = (await tableModel.countDocuments()) > 0;
    if (isFirstItem) {
      await tableModel.updateMany(
        {},
        {
          $push: { itemName: storeData },
          $inc: { addCount: 1 },
        },
        { new: true }
      );
    } else {
      await tableModel.create({
        itemName: [storeData],
        addCount: 1,
        updateCount: 0,
      });
    }

    const data = {
      itemName,
      status: true,
      message: "Item Added Successfully",
    };
    res.json(data);
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

const updateData = async (req, res, next) => {
  try {
    const { _id, name } = req.body;

    await tableModel.findOneAndUpdate(
      { "itemName._id": _id },
      {
        $set: { "itemName.$.value": name },
        $inc: { updateCount: 1 },
      },
      { new: true }
    );

    const resp = {
      status: true,
      message: "Item Updated Successfully",
    };
    res.json(resp);
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  getData,
  addData,
  updateData,
};
