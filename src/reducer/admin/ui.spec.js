import assert from 'assert';
import {
    toggleSidebar,
    setSidebarVisibility,
    refreshView,
} from '../../actions/uiActions';
import reducer, { isSidebarOpen, getViewVersion } from './ui';

describe('ui reducer', () => {
    it('should return hidden sidebar by default', () => {
        assert.deepEqual(
            { sidebarOpen: false, viewVersion: 0 },
            reducer(undefined, {})
        );
    });
    it('should toggle sidebar visibility upon TOGGLE_SIDEBAR', () => {
        assert.deepEqual(
            { sidebarOpen: false },
            reducer({ sidebarOpen: true }, toggleSidebar())
        );
        assert.deepEqual(
            { sidebarOpen: true },
            reducer({ sidebarOpen: false }, toggleSidebar())
        );
    });
    it('should set sidebar visibility upon SET_SIDEBAR_VISIBILITY', () => {
        assert.deepEqual(
            { sidebarOpen: false },
            reducer({ sidebarOpen: true }, setSidebarVisibility(false))
        );
        assert.deepEqual(
            { sidebarOpen: true },
            reducer({ sidebarOpen: true }, setSidebarVisibility(true))
        );
        assert.deepEqual(
            { sidebarOpen: false },
            reducer({ sidebarOpen: false }, setSidebarVisibility(false))
        );
        assert.deepEqual(
            { sidebarOpen: true },
            reducer({ sidebarOpen: false }, setSidebarVisibility(true))
        );
    });
    it('should increment the viewVersion upon REFRESH_VIEW', () => {
        assert.deepEqual(
            { sidebarOpen: false, viewVersion: 1 },
            reducer(undefined, refreshView())
        );
    });
});

describe('ui selectors', () => {
    describe('isSidebarOpen', () => {
        it('should return false if sidebar is closed', () => {
            assert.deepEqual(isSidebarOpen({ sidebarOpen: false }), false);
        });
    });

    describe('getViewVersion', () => {
        it('should return the view version number', () => {
            assert.deepEqual(getViewVersion({ viewVersion: 0 }), 0);
        });
    });
});
